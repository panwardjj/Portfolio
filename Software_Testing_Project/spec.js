describe('Protractor Test', function () {
    it('Test Login TWMS via Valid User', function () {

        //link to browser
        browser.get('http://twms.twss.co.th:8080/twms-dashboard/#/');
        var username = 'consult'; //Username
        var password = 'consult'; //Password
        var account = 'Consult Derive' //User Account Name

        //send username
        browser.sleep(2000);
        element(by.id('i_username')).sendKeys(username).then(function () {
            console.log('Input Username : ' + username);
        });

        //send password
        browser.sleep(2000);
        element(by.id('i_password')).sendKeys(password).then(function () {
            console.log('Input Password : ' + password);
        });

        //click login
        browser.sleep(2000);
        element(by.buttonText('Log in')).click().then(function () {
            console.log('Log in success');
        });

        //check User Account
        browser.sleep(2000);
        element(by.xpath('/html/body/div[1]/div[2]/div[1]/div/div[3]/div[2]/h2')).getText().then(function (account) {
            console.log("User account is \'" + account + "\'");
        });


    });

    it('Test Create SO with valid input', function () {

        var Customer = 100;
        var Customer_Name = 'Amazon TU';
        var Ref_Doc_No = 'Test-6309683040-001';
        var product_code = 100;

        // click Outbound
        browser.sleep(2000);
        element(by.xpath("//a[contains(.,'Outbound')]")).click().then(function () {
            console.log('Click Outbound success');
        });

        // click Sales Orders
        browser.sleep(2000);
        element(by.xpath("//a[contains(text(),'Sales Orders')]")).click().then(function () {
            console.log('Click Sales Orders success');
        });

        // click Create SO
        browser.sleep(2000);
        element(by.xpath("//a[contains(.,'Create SO')]")).click().then(function () {
            console.log('Click Create SO success');
        });

        // Sales Order Details
        // Client
        browser.sleep(2000);
        element(by.css('span[aria-owns="i_client_listbox"]')).click();
        browser.sleep(2000);
        element(by.id('i_client_listbox')).all(by.css('li[data-offset-index="1"]')).click().then(function () {
            console.log('Choose client success');
        });;
        browser.sleep(2000);

        //Customer
        browser.sleep(2000);
        element(by.id("i_customer_insert")).sendKeys(Customer)
        browser.sleep(2000);
        element(by.css('#i_customer_insert-list ul li:nth-child(2)')).click().then(function () {
            console.log('Customer :' + Customer);
        });

        //Ship To Address 
        browser.sleep(2000);
        element(by.css('span[aria-owns="i_shipto_address_insert_listbox"]')).click();
        browser.sleep(2000);
        element(by.css('#i_shipto_address_insert-list ul li:nth-child(2)')).click().then(function () {
            console.log('Choose Ship to Address success');
        });

        //SO Date
        browser.sleep(2000);
        element(by.id("i_document_date")).sendKeys('24/11/2023').then(function () {
            console.log('SO Date :' + '24/11/2023');
        });

        //Request Date
        browser.sleep(2000);
        element(by.id("i_request_date_insert")).sendKeys('25/11/2023').then(function () {
            console.log('Request Date :' + '25/11/2023');
        });

        //Ref Doc No
        browser.sleep(2000);
        element(by.id("i_ref_doc_insert")).sendKeys(Ref_Doc_No).then(function () {
            console.log('Ref Doc No :' + Ref_Doc_No);
        });

        // Create line item
        browser.sleep(2000);
        element(by.css('#i_create_line_item')).click().then(function () {
            console.log('Create line item success');
        });

        // Product Code
        browser.sleep(2000);
        element(by.css('input[name="productcode"]')).sendKeys(product_code);
        browser.sleep(2000);
        element(by.xpath('/html/body/div[19]/div')).all(by.css('ul li[data-offset-index="0"]')).click().then(function () {
            console.log('Product Code : ' + product_code);
        });
        // update
        browser.sleep(2000);
        element(by.className("k-button k-button-icontext k-primary k-grid-update")).click().then(function () {
            console.log('Update success');
        });

        //save&Confirm
        browser.sleep(2000);
        element(by.xpath("(//button[@class='btn btn-app'])[2]")).click().then(function () {
            console.log('Confirm success');
        });

        // click confirm finish alert
        browser.sleep(2000);
        browser.switchTo().alert().accept().then(function () {
            console.log('Confirm alert success');
        });



    });


    it('Test Search for complete created sales orders', function () {

        var Ref_Doc_No = 'Test-6309683040-001';
        var SO_date = '24/11/2023';

        // click Search
        browser.sleep(2000);
        element.all(by.css('li[class="k-item k-state-default k-first"]')).click().then(function () {
            console.log('Click search page success');
        });
        browser.sleep(2000);

        //client
        element(by.xpath("(//div[@class='col-sm-2 col-xs-12']//span)[1]")).click();
        browser.sleep(2000);
        element(by.id("searchClient_listbox")).all(by.css('li[class="k-item ng-scope"]')).click().then(function () {
            console.log('Choose Client success');
        });
        browser.sleep(2000);

        //Ref Doc No
        element(by.id("i_ref_doc_number")).sendKeys(Ref_Doc_No).then(function () {
            console.log('Ref Doc No :' + Ref_Doc_No);
        });
        browser.sleep(2000);

        //SO Date
        element(by.id("i_created_date")).sendKeys(SO_date).then(function () {
            console.log('SO Date :' + SO_date);
        });
        browser.sleep(2000);


        //status
        element(by.css('span[aria-owns="i_status_listbox"]')).click();
        browser.sleep(2000);
        element(by.id('i_status_listbox')).all(by.css('li[data-offset-index="3"]')).click().then(function () {
            console.log('Choose status success');
        });
        browser.sleep(2000);

        //click Search
        element(by.xpath("(//div[@class='col-sm-3 col-xs-12']//span)[1]")).click().then(function () {
            console.log('Click search button success');
        });
        browser.sleep(5000);

        //check
        element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(2)')).getText().then(function (text) {
            expect(text).toEqual("PTTPLC ( AMAZON )")
        });

        element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(4)')).getText().then(function (text) {
            expect(text).toEqual(SO_date)
        });

        element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(6)')).getText().then(function (text) {
            expect(text).toEqual(Ref_Doc_No)
        });

        element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(12) span')).getText().then(function (text) {
            expect(text).toEqual("CONFIRMED")
            console.log('Search success for created sales orders!')
        });



    });


    it('Log out', function () {
        //click logout
        element(by.className('user-profile dropdown-toggle ng-binding')).click();
        browser.sleep(2000);
        element.all(by.linkText("Log Out")).click().then(function () {
            console.log('Log out success');
        });
        browser.sleep(2000);
    })

});

