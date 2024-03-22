import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'
import { Post, Hashtag } from './postType'
import useSWR from 'swr'

const notion = new Client({
    auth: process.env.NOTION_KEY,
})

const notionApi = new NotionAPI({
    // authToken: process.env.TOKEN_V2,
});

export const usePosts = (databaseId:any) => {
    const {data} = useSWR(databaseId, (id: any) => notion.databases.query({database_id: id}))
    return{
        posts: data
    }
}

export const usePage = async (pageId: string) => {
    const {data} = useSWR(pageId, id => notionApi.getPage(id).then(res => {throw res}));
}
export const getPosts = async ( databaseId: string) => {
    const response = await notion.databases.query({
        database_id: databaseId,
    })

    const { results } = response

    let posts = results.map((result:any) => {
        const d = result.properties

        if(!d.Slug.rich_text.length){
            let properties = {
                "Slug": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": result.url.split('/').slice(-1)[0].replace(/-/g, '_'),
                            }
                        }
                    ]
                }
            };
            updateProperties(result.id, properties);
        }

        if(d.Published.checkbox == false) {
            return undefined
        }

        const item:any = {
            id: result.id,
            url: result.url,
            slug: '',
            title: '',
            date: '',
            edited: result.last_edited_time,
            published: false,
            hashtags: [],
            recordMap: {},
        }

        Object.keys(d).forEach((key) => {
            const property = d[key]
            if (property.type === 'people') {
                item[key.toLowerCase()] = property.people.map((p:any) => (p as any).name)
            } else if (property.type === 'rich_text') {
                item[key.toLowerCase()] = property.rich_text[0]?.plain_text
            } else if (property.type === 'files') {
                if (property.files[0].type === 'external') {
                    item[key.toLowerCase()] = property.files[0].name
                } else {
                    item[key.toLowerCase()] = property.files[0].file?.url
                }
            } else if (property.type === 'title') {
                item[key.toLowerCase()] = property.title[0]?.plain_text
            } else if (property.type === 'checkbox') {
                item[key.toLowerCase()] = property.checkbox
            } else if (property.type === 'multi_select') {
                item[key.toLowerCase()] = property.multi_select?.map((hashtag:any) => hashtag.name)
            } else if (property.type === 'date') {
                item[key.toLowerCase()] = property.date?.start
            }
        })

        const timeZoneOffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        if(!d.Date.date) {
            let localISOTime = (new Date(Date.now() - timeZoneOffset)).toISOString().slice(0, -1);
            localISOTime += '-08:00';

            let properties = {
                "Date": {
                    "date": {
                        "start": localISOTime,
                    }
                }
            };
            updateProperties(result.id, properties);

            item.date = localISOTime;
        }

        if(item.date.length < 10){
            item.date = item.date + 'T16:00:00.000-08:00'
        }
        item.date = new Date(item.date);

        return item as Post
    })

    posts = posts.filter((post): post is Post => typeof post !== 'undefined');

    posts.sort((a, b) => b!.date - a!.date);

    return posts
}

export const getPage = async (pageId: string) => {
    return await notionApi.getPage(pageId);
}

export const updateProperties = async (pageId: string, properties: any) => {
    await notion.pages.update({
        page_id: pageId,
        properties,
    });
}

export const getHashtags = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_BLOG_ID ?? '',
    })
    const { results } = response as any;

    let hashtags:Hashtag[] = [];
    for(const result of results){
        const d = result.properties! as any
        for(const select of d.Hashtags.multi_select) {
            if(!hashtags.filter(hashtag => hashtag.name == select.name).length){
                hashtags.push({'name':select.name, 'color':select.color, 'count':1})
            }else{
                hashtags.filter(hashtag => hashtag.name == select.name)[0].count += 1
            }
        }

    }
    hashtags = hashtags.sort((a, b) => b.count - a.count);
    return hashtags
}
