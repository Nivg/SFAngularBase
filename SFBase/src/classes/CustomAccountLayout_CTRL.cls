/**
 * Created by N.G on 17/04/2017.
 */
public with sharing class CustomAccountLayout_CTRL
{
    public enum ResultStatus {Success, Error}

    @RemoteAction
    public static Object getAccount (Map<String, Object> arg)
    {
        Object result = new Map<String, Object>();
        try
        {
            Id accountId = (Id)arg.get('Id');
            List<Account> accountList = [SELECT Id, Name, Phone, Type, Website FROM Account WHERE Id = :accountId];
            if(!accountList.isEmpty())
            {
                AccountModel am = new AccountModel();
                am.Status = ResultStatus.Success.Name();
                am.Id = accountList[0].Id;
                am.Name = accountList[0].Name;
                am.Phone = accountList[0].Phone;
                am.Type = accountList[0].Type;
                am.Website = accountList[0].Website;
                result = am;
            }
        }
        catch (Exception e)
        {
            result = generateErrorResult(e);
        }
        return result;
    }

    @RemoteAction
    public static Object saveAccount (Map<String, Object> arg)
    {
        Object result = new Map<String, Object>();
        try
        {
            String argAsJSON = JSON.serialize(arg);
            AccountModel am = (AccountModel)JSON.deserialize(argAsJSON, AccountModel.class);
            Account acc = new Account(
                Id = am.Id,
                Name = am.Name,
                Phone = am.Phone,
                Type = am.Type,
                Website = am.Website
            );
            upsert acc;

            am.Status = ResultStatus.Success.Name();
            am.Id = acc.Id;
            result = am;
        }
        catch (Exception e)
        {
            result = generateErrorResult(e);
        }
        return result;
    }

    private static Object generateErrorResult(Exception e)
    {
        AccountModel am = new AccountModel();
        am.Status = ResultStatus.Error.Name();
        am.Message = e.getMessage();
        return am;
    }

    class AccountModel
    {
        public String Id;
        public String Name;
        public String Phone;
        public String Type;
        public String Website;

        public String Status;
        public String Message;
    }
}