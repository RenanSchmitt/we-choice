const user = require('./services/User')

describe('User Teste', ()=>{
    it('should return the users object', () => {
        expect(user.getUsers()).toBe(0)
    })
})