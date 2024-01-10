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

        const activeTab = tabs.filter(e => e.active)?.[0];

        if (!activeTab) {
            return;
        }

        chrome.tabs.sendMessage(activeTab.id, { task });
    });
}