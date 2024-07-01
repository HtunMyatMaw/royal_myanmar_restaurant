export default class DocSaveFormat {
    constructor(dbTableName, data, uniqId = null) {
        this.dbTableName = dbTableName
        this.data = data
        this.uniqId = uniqId
    }
}