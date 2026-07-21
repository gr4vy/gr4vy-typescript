import { Hooks } from "./types.js";
import { TokenHook } from "./tokenHook.js";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

export function initHooks(hooks: Hooks) {
    // Signs a fresh ES512 JWT from the caller's private key and attaches it as the
    // Authorization header on every request. No-op unless the security source is a
    // { privateKey } object (i.e. once the custom-security-scheme overlay is generated in).
    hooks.registerBeforeRequestHook(new TokenHook());
}
