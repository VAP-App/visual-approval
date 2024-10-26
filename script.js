/* styles.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
}

body {
    background-color: #f5f5f5;
}

.page {
    min-height: 100vh;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hidden {
    display: none !important;
}

.container {
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 500px;
}

.logo {
    width: 200px;
    margin: 0 auto 30px;
    display: block;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
    color: #333;
}

input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: none;
    background: #f5f5f5;
    border-radius: 8px;
    font-size: 16px;
}

button {
    width: 100%;
    padding: 12px;
    background: #000;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #333;
}

.upload-area {
    border: 2px dashed #ccc;
    padding: 40px;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 20px;
}

.preview {
    margin-top: 20px;
}

.preview img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
}

.link-area {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #eee;
}

.link-container {
    display: flex;
    gap: 10px;
}

.link-container input {
    flex: 1;
    margin-bottom: 0;
}

.link-container button {
    width: auto;
    padding: 12px 24px;
}

.button-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 20px;
}

.order-details {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
}

.product-info {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.product-info img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
}

.price-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.total {
    font-weight: bold;
    font-size: 18px;
    border-top: 1px solid #eee;
    padding-top: 10px;
    margin-top: 10px;
}

.payment-button {
    margin-top: 20px;
    background: #0066ff;
}

.payment-button:hover {
    background: #0052cc;
}
