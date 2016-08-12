"use strict";
var Member = (function () {
    function Member(ContactId, ClassId, Name, Sex, Phone, Address, Email) {
        if (ContactId === void 0) { ContactId = null; }
        if (ClassId === void 0) { ClassId = null; }
        if (Name === void 0) { Name = null; }
        if (Sex === void 0) { Sex = null; }
        if (Phone === void 0) { Phone = null; }
        if (Address === void 0) { Address = null; }
        if (Email === void 0) { Email = null; }
        this.ContactId = ContactId;
        this.ClassId = ClassId;
        this.Name = Name;
        this.Sex = Sex;
        this.Phone = Phone;
        this.Address = Address;
        this.Email = Email;
    }
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=Member.js.map