import * as AboutActionCreators from "./About"
import * as AccreditationActionCreators from "./Accreditation"
import * as DocumentationActions from "./Documentation"
import * as ContactsActionCreators from "./Contacts"
import * as SectionRefsActionCreators from "./SectionRefs"
import * as MessengersActionCreator from "./Messengers"

export default {
  ...AboutActionCreators,
  ...AccreditationActionCreators,
  ...DocumentationActions,
  ...ContactsActionCreators,
  ...SectionRefsActionCreators,
  ...MessengersActionCreator
}