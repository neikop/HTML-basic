## Buổi 1

### 1. Cấu trúc file HTML

```
<!DOCTYPE html>
<html>
<head>
  <title>Tiêu đề trang web</title>
  <link rel="icon" type="image/x-icon" href="./images/facebook_icon.svg">
</head>
<body>
  <p>Hello world</p>
</body>
</html>
```

### 2. Một số loại thẻ

Thẻ heading: `<h1> <h2> <h3> <h4> <h5> <h6>`

Thẻ văn bản thông thường: `<p> <div> <span>`

Thẻ định dạng: `<b> <i> <u>`

Thẻ hình ảnh: `<img>`

Thẻ link: `<a>`

### 3. Các cách viết style

- Inline CSS: Viết thuộc tính style trực tiếp ở thẻ

```
<div style="color: red;">Inline CSS</div>
```

- Internal CSS: Viết CSS trong thẻ `<style>`

```
<style>
  img {
    height: 200px;
  }
</style>
```

- External CSS: Import file CSS qua thẻ `<link>`

```
<link rel="stylesheet" href="style.css">
```

#### Độ ưu tiêm: Inline CSS > Internal CSS > External CSS

### 4. Các đối tượng viết CSS

```
<p id="unique" class="title">Đoạn văn bản...</p>
```

```
<style>
  #unique {
    color: red;
  }
  .title {
    font-size: 24px;
  }
  p {
    font-weight: bold;
  }
</style>
```
