const os = require('os');

module.exports = () => {
    const uptime = () => {
        var ut_sec = os.uptime();
        var ut_min = ut_sec / 60;
        var ut_hour = ut_min / 60;

        ut_sec = Math.floor(ut_sec);
        ut_min = Math.floor(ut_min);
        ut_hour = Math.floor(ut_hour);

        ut_hour = ut_hour % 60;
        ut_min = ut_min % 60;
        ut_sec = ut_sec % 60;
        return `${ut_hour} Hour(s) ${ut_min} minute(s) and ${ut_sec} second(s)`;
    }
    console.log(uptime());
    return {
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform(),
        arch: os.arch(),
        release: os.release(),
        loadavg: os.loadavg(),
        uptime: uptime(),
        totalmem: Math.round(os.totalmem() * 100 / 1024 / 1024 / 1024) / 100 + "GB",
        freemem: Math.round(os.freemem() * 100 / 1024 / 1024 / 1024) / 100 + "GB",
        cpus: os.cpus(),
        networkInterfaces: os.networkInterfaces(),
        endianness: os.endianness(),
        homedir: os.homedir(),
        tmpdir: os.tmpdir(),
        userInfo: os.userInfo(),
        release: os.release(),
        tmpdir: os.tmpdir(),
    };
};
