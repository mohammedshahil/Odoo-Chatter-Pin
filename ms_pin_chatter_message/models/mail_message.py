from odoo import fields, models


class Message(models.Model):
    _inherit = "mail.message"

    pinned_at = fields.Datetime(
        "Pinned", help="Datetime at which the message has been pinned"
    )

    def toggle_pin(self):
        self.ensure_one()
        if self.pinned_at:
            self.pinned_at = False
        else:
            self.pinned_at = fields.Datetime.now()
