import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import v8 = require('v8');

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // const totalHeapSize = v8.getHeapStatistics().total_available_size;
    // const totalHeapSizeinMB = (totalHeapSize /1024/1024).toFixed(2);
    // const totalHeapSizeinGB = (totalHeapSize /1024/1024/1024).toFixed(2);
    // context.log(`Total heap size: ${totalHeapSizeinMB} MB`);
    // context.log(`Total heap size: ${totalHeapSizeinGB} GB`);
    context.res = {
        status: 200,
        body: `Hello World!`
    };
};

export default httpTrigger;
