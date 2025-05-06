if (history.pushState) {
    history.pushState(null, null, location.href.replace('.html', ''));
}
