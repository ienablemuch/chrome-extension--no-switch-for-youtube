chrome.commands.onCommand.addListener(command => {
    const [action, task] = command.split('-');

    // console.log('command', command);

    if (action === 'do') {
        tellTask(task)
    }
});

// chrome.action.onclicked

function tellTask(task) {
    chrome.tabs.query({active: true, currentWindow: true }, ([theActiveTab]) => {
        // console.log('theActiveTab', theActiveTab);

        // eslint-disable-next-line no-undef
        chrome.tabs.query({ }, tabs => {
            console.log('tabs', tabs);

            const activeTab = tabs.filter(e => e.active)?.[0];

            if (!activeTab) return;

            chrome.tabs.sendMessage(activeTab.id, { task });
        });
    });
}