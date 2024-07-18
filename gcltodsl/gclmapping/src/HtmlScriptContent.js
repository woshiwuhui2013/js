
const vscode = acquireVsCodeApi();
window.onload = function () {
    const element = document.getElementById("graph")
    element.addEventListener('click', (event) => {
        console.log('ffffffffffff')
        console.log(event.target)
    })


    // 模拟流程图元素数据
    // const flowchartElements = [
    //     { name: "开始", type: "startevent" },
    //     { name: "任务1", type: "usertask" },
    //     { name: "判断", type: "gateway" },
    //     { name: "任务2", type: "scripttask" },
    //     { name: "结束", type: "endevent" }
    // ];

    const elementTypes = ["startevent", "endevent", "usertask", "scripttask", "gateway", "reglangtask","authlangtask", "cryptlangtask"];

    function createSelectElement(currentType, index) {
        const select = document.createElement('select');
        select.className = 'w-full px-2 py-1 border rounded';
        select.dataset.index = index;
        elementTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            option.selected = type === currentType;
            select.appendChild(option);
        });
        return select;
    }



    function dedupeFor(arr) {
        let unique = [];
        for (let i = 0; i < arr.length; i++) {
            if (unique.indexOf(arr[i]) === -1) {
                unique.push(arr[i]);
            }
        }
        return unique;
    }

    function populateTable() {
        const tableBody = document.getElementById('configTableBody');
        flowchartElements = dedupeFor(flowchartElements);
        flowchartElements.forEach((element, index) => {
            const row = tableBody.insertRow();
            const nameCell = row.insertCell(0);
            const typeCell = row.insertCell(1);

            nameCell.textContent = element;
            nameCell.className = 'px-4 py-2 border-b';
            
            typeCell.appendChild(createSelectElement("scripttask", index));
            typeCell.className = 'px-4 py-2 border-b';
        });
    }

    function submitConfiguration() {
        const selects = document.querySelectorAll('#configTableBody select');
        const configuration = Array.from(selects).map(select => ({
            name: flowchartElements[select.dataset.index],
            type: select.value
        }));

        console.log('配置已保存:', configuration);
        // 这里可以添加发送配置到服务器的代码
        alert('配置已保存！请查看控制台以获取详细信息。');
        
        vscode.postMessage({ command: "dsltype", content: configuration }, "*");
        
    }

    // 页面加载时填充表格
    // window.addEventListener('load', () => {
        populateTable();
        document.getElementById('submitConfig').addEventListener('click', submitConfiguration);
    // });

}