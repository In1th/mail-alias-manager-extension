import type { Api } from "./Api";
import { FakeApi } from "./FakeApi";
import { StorageApi } from "./StorageApi";

export class ApiUtils {
    static getApi(): Api{
        if (chrome.storage === undefined){
            return new FakeApi();
        }
    
        return new StorageApi();
    }
}