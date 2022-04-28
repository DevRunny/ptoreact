import * as AboutActionCreators from "./About"
import * as AccreditationActionCreators from "./Accreditation"
import * as ContactsActionCreators from "./Contacts"

export default {
  ...AboutActionCreators,
  ...AccreditationActionCreators,
  ...ContactsActionCreators
}