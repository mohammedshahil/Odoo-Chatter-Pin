/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { Thread } from "@mail/core/common/thread_model";

patch(Thread.prototype, {
  get messages() {
    const messages = super.messages;
    this.pinnedMessages = messages.filter((message) => message.pinned_at);
    return messages.filter((message) => !message.pinned_at);
  },
});
