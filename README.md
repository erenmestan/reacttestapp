# React Task Yöneticisi / React Task Manager

Bu proje tek bir ekranda task oluşturmanıza, açtığınız task'leri düzenlemenize ve silebilmenize imkan tanıyan bir React projesidir. / This project is a React application that allows you to create tasks on a single screen, edit and delete tasks.

## Kurulum / Installation

Proje klonlandıktan veya indirildikten sonra, aşağıdaki adımları izleyerek bağımlılıkları yükleyin: / After cloning or downloading the project, follow these steps to install dependencies:

1. Terminali açın ve proje dizinine gidin. / Open your terminal and navigate to the project directory.

2. Proje dizininde aşağıdaki komutu çalıştırarak gerekli paketleri yükleyin: / Run the following command to install the required packages:

    ```
    npm install
    ```

3. JSON Server paketini yüklemek için aşağıdaki komutu çalıştırın: / To install the JSON Server package, run the following command:

    ```
    npm install -g json-server
    ```

4. JSON Server'ı başlatmak için aşağıdaki komutu çalıştırın: / Start the JSON Server by running the following command:

    ```
    json-server --watch db.json --port 3004
    ```

5. React uygulamasını başlatmak için aşağıdaki komutu çalıştırın: / Start the React application by running the following command:

    ```
    npm start
    ```

6. Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görebilirsiniz. / You can view the application by going to `http://localhost:3000` in your browser.

## JSON Server Kullanımı / JSON Server Usage

Bu projede, JSON Server'ı kullanarak basit bir API simülasyonu sağlanmaktadır. JSON Server, `db.json` dosyasını temel alarak bir RESTful API sunar. Bu dosya içerisindeki verileri okuyabilir, yazabilir, güncelleyebilir ve silebilirsiniz. JSON Server başlatıldığında, `http://localhost:3004` adresine bir API sunucusu başlatılır. / This project provides a simple API simulation using JSON Server. JSON Server offers a RESTful API based on the `db.json` file. You can read, write, update, and delete data in this file. When the JSON Server is started, an API server is launched at `http://localhost:3004`.

Örneğin, `http://localhost:3004/posts` adresine HTTP GET isteği göndererek tüm "posts" kayıtlarını alabilirsiniz. / For example, you can send an HTTP GET request to `http://localhost:3004/posts` to retrieve all "posts" records.

Daha fazla bilgi için JSON Server belgelerine başvurabilirsiniz: [JSON Server Belgesi](https://github.com/typicode/json-server) / For more information, refer to the JSON Server documentation: [JSON Server Documentation](https://github.com/typicode/json-server)

## Katkılar / Contributions

Katkılarınızı bekliyoruz! Eğer bir hata bulursanız veya herhangi bir öneriniz varsa, lütfen bir issue açın veya bir pull request gönderin. / Contributions are welcome! If you find a bug or have any suggestions, please open an issue or submit a pull request.
