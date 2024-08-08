export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { id } = getQuery(event);
    const data: any = await $fetch(`${config.API}/api/download?episodeid=${id}`);
    return data
});