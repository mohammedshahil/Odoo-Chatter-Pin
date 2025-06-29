/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { Message } from "@mail/core/common/message_model";

patch(Message.prototype, {
  async togglePin() {
    const pinned = this.pinned_at;
    await this.store.env.services.orm.call("mail.message", "toggle_pin", [
      [this.id],
    ]);
    this.update({ pinned_at: !pinned });
  },
});
