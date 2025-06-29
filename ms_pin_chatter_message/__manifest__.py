{
    "name": "Pin Chatter Messages",
    "version": "18.0.1.0.0",
    "summary": "Allows users to pin and unpin messages in the chatter.",
    "author": "Mohammed Shahil",
    "website": "http://www.shahil.info",
    "license": "OPL-1",
    "depends": ["mail"],
    "category": "Extra Tools",
    "data": [],
    "assets": {
        "web.assets_backend": [
            "ms_pin_chatter_message/static/src/chatter/web/chatter.xml",
            "ms_pin_chatter_message/static/src/chatter/web/thread_model_patch.js",
            "ms_pin_chatter_message/static/src/chatter/web/chatter_patch.js",
            "ms_pin_chatter_message/static/src/core/common/message_actions.js",
            "ms_pin_chatter_message/static/src/core/common/message_model_patch.js",
        ],
    },
    "installable": True,
    "application": False,
}
