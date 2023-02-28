export class Router {
    routes = {};

    add(routeName, page) {
        this.routes[routeName] = page
    };

    async route(event) {
        event = event || window.event
        event.preventDefault();

        window.history.pushState({}, "", event.target.href)

        await this.handle()
    };

    async handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]       

        await fetch(route)
            .then((data) => data.text())
            .then(html => document.querySelector('#app').innerHTML = html)
    };
};
