const pageConfig = {
  // Title for your status page
  title: "Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://git.saneke.eu', label: 'Forgejo' },
    { link: 'https://element.saneke.eu/', label: 'Element' },
    //{ link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'dendrite',
      // `name` is used at status page and callback message
      name: 'Dendrite server',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://matrix.saneke.eu/_dendrite/monitor/health',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'Uptime of matrix.saneke.eu',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://element.saneke.eu',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 60000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        //Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
      //body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      //responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
      //checkLocationWorkerRoute: 'https://de.naco.li',
    },
    {
      id: 'forgejo',
      name: 'Forgejo instance',
      method: 'GET',
      target: 'https://git.saneke.eu/api/healthz',
      tooltip: 'Uptime of git.saneke.eu',
      statusPageLink: 'https://git.saneke.eu',
      expectedCodes: [200],
      timeout: 60000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      //checkLocationWorkerRoute: 'https://de.naco.li',
    },
    {
      id: 'vengeful-forge',
      name: 'Vengeful Forge',
      method: 'GET',
      target: 'https://git.vengeful.eu/api/healthz',
      tooltip: 'Uptime of git.vengeful.eu',
      statusPageLink: 'https://git.vengeful.eu',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      //checkLocationWorkerRoute: 'https://de.naco.li',
    },
    {
      id: 'synapse-main',
      name: 'Synapse server',
      method: 'GET',
      target: 'https://matrix.vengeful.eu/health',
      tooltip: 'Uptime of matrix.vengeful.eu',
      statusPageLink: 'https://element.vengeful.eu',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      //checkLocationWorkerRoute: 'https://de.naco.li',
    },
    {
      id: 'vengeful-auth',
      name: 'Vengeful Auth Server',
      method: 'GET',
      target: 'https://auth.vengeful.eu/h/',
      tooltip: 'Uptime of auth.vengeful.eu',
      statusPageLink: 'https://auth.vengeful.eu',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      //checkLocationWorkerRoute: 'https://de.naco.li',
    }
    // Example TCP Monitor
    //{
      //id: 'test_tcp_monitor',
      //name: 'Example TCP Monitor',
      // `method` should be `TCP_PING` for tcp monitors
      //method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      //target: '1.2.3.4:22',
      //tooltip: 'My production server SSH',
      //statusPageLink: 'https://example.com',
      //timeout: 5000,
    //},
    /*{
      id: 'matrix_ssh',
      name: 'Old Synapse host system',
      method: 'TCP_PING',
      target: '85.202.163.64:22221',
      tooltip: 'Uptime of Synapse host system',
      timeout: 5000,
      checkLocationWorkerRoute: 'https://de.naco.li',
    },
    {
      id: 'oracle_postgres',
      name: 'Postgres server',
      method: 'TCP_PING',
      target: '130.61.16.195:5432',
      tooltip: 'Uptime of Oracle ARM Postgres server',
      timeout: 5000,
      checkLocationWorkerRoute: 'https://de.naco.li',
    },*/
    {
      id: 'oracle_ssh',
      name: 'Oracle ARM server',
      method: 'TCP_PING',
      target: '130.61.16.195:22221',
      tooltip: 'Uptime of Oracle ARM server',
      timeout: 5000,
      //checkLocationWorkerRoute: 'https://de.naco.li',
    },
    {
      id: 'vengeful_ssh',
      name: 'Vengeful server',
      method: 'TCP_PING',
      target: '185.216.214.52:22221',
      tooltip: 'Uptime of the Vengeful.eu host',
      timeout: 5000,
      //checkLocationWorkerRoute: 'https://de.naco.li',
    },
    {
      id: 'ovh_25skleb01_ssh',
      name: 'OVH KS-LE-B Server',
      method: 'TCP_PING',
      target: '	217.182.199.102:22',
      tooltip: 'Uptime of Kimsufi KS-LE-B server',
      timeout: 5000,
      //checkLocationWorkerRoute: 'https://de.naco.li',
    }
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    //appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    //recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    //timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    //gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
