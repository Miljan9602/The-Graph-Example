import {SetValue} from '../generated/Storage/Storage'
import { Storage } from '../generated/schema'
import { log } from "@graphprotocol/graph-ts"

/*
export function handleNewGravatar(event: NewGravatar): void {
  let gravatar = new Gravatar(event.params.id.toHex())
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}

export function handleUpdatedGravatar(event: UpdatedGravatar): void {
  let id = event.params.id.toHex()
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
  }
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}
*/


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
