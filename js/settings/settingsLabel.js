function SettingsLabel()
{
    this.setup = function(parent, value)
    {
        this.buildElement(parent, value)
    }

    this.buildElement = function(parent, value)
    {
        let textContent = document.createTextNode(value);

        let title = document.createElement("div");
        title.className = "overview-setting-label";

        title.appendChild(textContent);
        parent.appendChild(title);
    }
}