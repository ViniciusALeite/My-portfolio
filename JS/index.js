import { Router } from './router.js';

const router = new Router();

router.add('/index.html', "/pages/home.html");
router.add('', "/pages/home.html");
router.add('/', "/pages/home.html");
router.add("/aboutme", "/pages/aboutme.html");
router.add("/projects", "/pages/projects.html");


router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();