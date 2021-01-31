import { HelloWorld, num } from "@monorepo/types";

export function message(): HelloWorld {
    const response: HelloWorld = {
        message: 'hello world!'
    };

    console.log(num);

    return response;
}

message()