export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const data: any = await $fetch(`${config.API}/api/random`);
    return data
});