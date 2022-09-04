module.exports = [
    {
        id: "form-contact",
        url: "/form/contact",
        method: "POST",
        variants: [
            {
                id: "success",
                type: "json",
                options: {
                    status: 201,
                    body: {
                        data: [{
                            "type": "form-contact",
                            // "id": "1",
                            "attributes": {
                                "name": "Jane Doe",
                                "email": "foo@bar.com",
                                "message": "This is a message"
                            }
                        }],
                    },
                },
            },
            {
                id: "validation-error",
                type: "json",
                options: {
                    status: 422,
                    body: {
                        errors: [
                            {
                                "type": "validation-error",
                                "source": {
                                    "attribute": "name"
                                },
                                "title": "Invalid Attribute",
                                "detail": "Name must be non-empty."
                            }
                        ]
                    },
                },
            },
        ],
    }
];
