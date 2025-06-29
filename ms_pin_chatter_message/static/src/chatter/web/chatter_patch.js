/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { Chatter } from "@mail/chatter/web_portal/chatter";
import { MessageCardList } from "@mail/core/common/message_card_list";

patch(Chatter.components, {
  MessageCardList,
});
