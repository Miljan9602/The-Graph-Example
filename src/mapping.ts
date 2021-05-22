import {SetValue} from '../generated/Storage/Storage'
import { Storage } from '../generated/schema'
import { log } from "@graphprotocol/graph-ts"

export function handleSetValue(event: SetValue): void {

    let id = event.params.value.toHex()
    let storage = Storage.load(id)

    log.info("Message to ve displayed {}", [id])

    if (storage == null) {
        storage = new Storage(id)
    }

    storage.number = event.params.value
    storage.save()
}
