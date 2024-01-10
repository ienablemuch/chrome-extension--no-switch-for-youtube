chrome.commands.onCommand.addListener(command => {
    const [action, task] = command.split('-');

    if (action === 'do') {
        tellTask(task)
    }
});

function tellTask(task) {
        // eslint-disable-next-line no-undef
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // eslint-disable-next-line no-undef
        // eslint-disable-next-line no-undef
        chrome.tabs.sendMessage(tabs[0].id, {
            task
        });
    });
}