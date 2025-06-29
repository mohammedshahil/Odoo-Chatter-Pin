/** @odoo-module **/

import { messageActionsRegistry } from "@mail/core/common/message_actions";
import { _t } from "@web/core/l10n/translation";

messageActionsRegistry.add("toggle-pin", {
  condition: (component) => component.props.message,
  icon: (component) =>
    component.props.message.pinned_at
      ? "fa fa-thumb-tack o-mail-Message-pinned"
      : "fa fa-thumb-tack",
  title: (component) =>
    component.props.message.pinned_at ? _t("Unpin") : _t("Pin"),
  onClick: (component) => component.props.message.togglePin(),
  sequence: 65,
});
