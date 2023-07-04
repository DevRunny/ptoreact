import * as AboutActionCreators from "./About";
import * as AccreditationActionCreators from "./Accreditation";
import * as DocumentationActionCreators from "./Documentation";
import * as ContactsActionCreators from "./Contacts";
import * as MapStateActionCreators from "./MapState"
import * as SectionRefsActionCreators from "./SectionRefs";
import * as MessengersActionCreators from "./Messengers";
import * as AuthActionsCreators from "./Auth";
import * as PointsActionsCreators from "./Points"
import * as ModalsActionsCreators from "./Modals"

export default {
  ...AboutActionCreators,
  ...AccreditationActionCreators,
  ...DocumentationActionCreators,
  ...ContactsActionCreators,
  ...MapStateActionCreators,
  ...SectionRefsActionCreators,
  ...MessengersActionCreators,
  ...AuthActionsCreators,
  ...PointsActionsCreators,
  ...ModalsActionsCreators
};
