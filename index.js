// HTTP requests. Remove this part if it's unused.
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

/**
 * @param {Request} request
 */
async function handleRequest(request) {
    return new Response("super awesome worker")
}


// Cron jobs. Remove this part if it's unused.
// Make sure to add a Cron Trigger in the crons array in wrangler.toml
addEventListener("scheduled", event => {
    event.waitUntil(handleScheduled(event))
})

// There is no type for the cron event, but it has only three properties.
// - cron returns the cron trigger value (e.g. */30 * * * *)
// - type always returns 'scheduled'
// - scheduledTime returns the time the event was scheduled (as unix epoch)
/**
 * 
 * @param {{cron: string, type: string, scheduledTime: number}} event
 */
async function handleScheduled(event) {
    return new Response("OK")
}