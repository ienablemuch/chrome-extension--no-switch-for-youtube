chrome.commands.onCommand.addListener(command => {
    const [action, task] = command.split('-');

    // console.log('command', command);

    if (action === 'do') {
        tellTask(task)
    }
});

function tellTask(task) {
    // eslint-disable-next-line no-undef
    chrome.tabs.query({ url: 'https://www.youtube.com/*' }, tabs => {
        // console.log('tabs', tabs);
        // eslint-disable-next-line no-undef
        // eslint-disable-next-line no-undef
        chrome.tabs.sendMessage(tabs[0].id, {
            task
        });
    });
}