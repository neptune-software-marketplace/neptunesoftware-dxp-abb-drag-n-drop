const data = payload;

try {

    await sendEmail({
        to: "example@org.com", // send to email
        subject: "no subject",
        from: "support@Org-software.com",
        templateId: "2CB15FAB-4022-EE11-A9BB-000D3ADA9C9B",
        primitives: { name: data.name, note: data.note },
    });

    await p9.events.publish("DnDAppListener", "Email has been sent!")
    complete();

} catch (e) {

    log.error(e)
    complete();

}