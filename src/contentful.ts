import { ContentfulClientApi, ContentfulCollection, Entry, EntryFieldTypes, createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_API_KEY!,
});

export async function getFutureProjects() {
    const response = await client.getEntries({
        content_type: 'project',
        'fields.status': 'Future'
    });

    return response.items;
};

export async function getCompletedProjects() {
    const response = await client.getEntries({
        content_type: 'project',
        'fields.status': 'Complete'
    });

    return response.items;
};

export async function getCurrentProject() {
    const response = await client.getEntries({
        content_type: 'project',
       'fields.status': 'Current'
    });

    return response.items.length ? response.items[0] : undefined;
};
