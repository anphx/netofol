# netofol
D4G project folder

**Restore Unfinished Survey**
----
  Returns index template .

* **URL**

  /s/:sessoin_id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `session_id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `index.html`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/s/1u34g201",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });


**Save Survey**
----
  Returns session_id .

* **URL**

  /save

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `session_id=[string]`

* **Data Params**
   `session_id=[string]`
   `history=[string]`
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `session_id=[string]`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/save",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
