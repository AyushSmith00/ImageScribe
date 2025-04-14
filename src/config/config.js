const config = {
    AppwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    AppwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    AppwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    AppwriteCollectionId: String(import.meta.env.VITE_COLLECTION_I),
    AppwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
}

export default config