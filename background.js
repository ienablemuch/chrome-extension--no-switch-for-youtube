chrome.commands.onCommand.addListener(command => {
    const [action, task] = command.split('-');

    // console.log('command', command);

    if (action === 'do') {
        tellTask(task)
    }
});



chrome.action.onClicked.addListener(() => {
    const isEdge = /Edg/i.test(navigator.userAgent);
    const prefix = isEdge ? 'edge' : 'chrome';
    createTab(`${prefix}://extensions/shortcuts#:~:text=NoSwitch`);
});

function tellTask(task) {
    chrome.tabs.query({ }, tabs => {
        console.log('tabs', tabs);

        const activeTab = tabs.filter(e => e.active)?.[0];

        if (!activeTab) return;

        chrome.tabs.sendMessage(activeTab.id, { task });
    });
}


async function createTab(url, useOpener) {
    let openerTabId;

    if (useOpener) {
        try {
            const tab = await chrome.tabs.getCurrent();
            openerTabId = tab.id;
        } catch (_e) {
            // NOP
        }
    }

    return await chrome.tabs.create({ url, openerTabId });
}

