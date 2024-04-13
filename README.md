The goal of this PCF is to give the external user a friendly UI to identify what state their record is in, it could be a support case or any other custom table that applies to your business scenario. 
That's why this PCF applies to Power Pages.

Unfortunately at the time I am developing this PCF, PCFs for Power Pages have a limitation with the OptionSet column as the bound parameter, as when testing the input parameter it will come up empty. However it works perfectly for Model Driven Apps.
So to overcome this limitation, the workaround is to create 2 lines of text columns in Dataverse, the first column will store the OptionSet values separated by commas like: Packed,Shipped,In process of delivery,Delivered.
The second column is to store the current/selected value in the OptionSet as: Sent

![image](https://github.com/walcivar/PowerPagesBPF/assets/5630463/1ef73f43-bcf1-4005-bd04-63685add8e4e)

Then when configuring the PCF you will have to select those two created line of text columns:

![image](https://github.com/walcivar/PowerPagesBPF/assets/5630463/0b6047bb-4e74-43db-9a73-08d4a43bc283)

Of course, this workaround involves extra work to fill in both text columns, but don't worry, here's a line of JavaScript that will help you fill in the first column (the values of the optionSet).

formContext.getAttribute("OptionSet_schemaName").getOptions();

You can apply this line when you are creating a record manually in the Model Driven App.

And for the second column (the current/selected value) you can also use a line of JavaScript:

formContext.getAttribute("OptionSet_schemaName").getText();

Or you can get it from a plugin if you don't want to rely on the user changing the optionSet manually.

In any case if you fill in both line of text columns then the PCF will work in Power Pages:

![image](https://github.com/walcivar/PowerPagesBPF/assets/5630463/08cbbeab-2cfc-41fe-b203-0e0a5629a311)

