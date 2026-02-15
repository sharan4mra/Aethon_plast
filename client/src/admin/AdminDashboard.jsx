import { useEffect, useMemo, useState } from "react";
import {
  API_BASE_URL,
  createProduct,
  createUser,
  deleteProduct,
  deleteUser,
  getProducts,
  getUsers,
  updateProduct,
  updateUser,
} from "./api";
import { clearAdminToken } from "./auth";
import "./AdminDashboard.css";

const emptyProductForm = {
  id: "",
  name: "",
  price: "",
  image: null,
};

const emptyUserForm = {
  id: "",
  name: "",
  email: "",
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState(emptyProductForm);
  const [productLoading, setProductLoading] = useState(false);
  const [productMessage, setProductMessage] = useState("");

  const [users, setUsers] = useState([]);
  const [userForm, setUserForm] = useState(emptyUserForm);
  const [userLoading, setUserLoading] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const [fatalError, setFatalError] = useState("");

  const loadData = async () => {
    try {
      const [productsData, usersData] = await Promise.all([getProducts(), getUsers()]);
      setProducts(productsData);
      setUsers(usersData);
      setFatalError("");
    } catch (error) {
      setFatalError(error.message || "Failed to load dashboard data");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogout = () => {
    clearAdminToken();
    window.location.href = "/admin/login";
  };

  const productActionLabel = useMemo(
    () => (productForm.id ? "Update Product" : "Create Product"),
    [productForm.id]
  );

  const userActionLabel = useMemo(
    () => (userForm.id ? "Update User" : "Create User"),
    [userForm.id]
  );

  const handleProductInput = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      setProductForm((previous) => ({ ...previous, image: files?.[0] || null }));
      return;
    }

    setProductForm((previous) => ({ ...previous, [name]: value }));
  };

  const resetProductForm = () => {
    setProductForm(emptyProductForm);
  };

  const handleProductSubmit = async (event) => {
    event.preventDefault();
    setProductLoading(true);
    setProductMessage("");

    try {
      const formData = new FormData();
      formData.append("name", productForm.name);
      formData.append("price", productForm.price);
      if (productForm.image) {
        formData.append("image", productForm.image);
      }

      if (productForm.id) {
        await updateProduct(productForm.id, formData);
        setProductMessage("Product updated");
      } else {
        await createProduct(formData);
        setProductMessage("Product created");
      }

      resetProductForm();
      await loadData();
    } catch (error) {
      setProductMessage(error.message || "Product action failed");
    } finally {
      setProductLoading(false);
    }
  };

  const handleEditProduct = (product) => {
    setProductForm({
      id: product._id,
      name: product.name,
      price: String(product.price),
      image: null,
    });
    setActiveTab("products");
  };

  const handleDeleteProduct = async (id) => {
    const confirmed = window.confirm("Delete this product?");
    if (!confirmed) return;

    try {
      await deleteProduct(id);
      setProductMessage("Product deleted");
      await loadData();
    } catch (error) {
      setProductMessage(error.message || "Delete failed");
    }
  };

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserForm((previous) => ({ ...previous, [name]: value }));
  };

  const resetUserForm = () => {
    setUserForm(emptyUserForm);
  };

  const handleUserSubmit = async (event) => {
    event.preventDefault();
    setUserLoading(true);
    setUserMessage("");

    try {
      if (userForm.id) {
        await updateUser(userForm.id, { name: userForm.name, email: userForm.email });
        setUserMessage("User updated");
      } else {
        await createUser({ name: userForm.name, email: userForm.email });
        setUserMessage("User created");
      }

      resetUserForm();
      await loadData();
    } catch (error) {
      setUserMessage(error.message || "User action failed");
    } finally {
      setUserLoading(false);
    }
  };

  const handleEditUser = (user) => {
    setUserForm({
      id: user._id,
      name: user.name,
      email: user.email,
    });
    setActiveTab("users");
  };

  const handleDeleteUser = async (id) => {
    const confirmed = window.confirm("Delete this user?");
    if (!confirmed) return;

    try {
      await deleteUser(id);
      setUserMessage("User deleted");
      await loadData();
    } catch (error) {
      setUserMessage(error.message || "Delete failed");
    }
  };

  return (
    <div className="admin-dashboard-page">
      <header className="admin-dashboard-header">
        <h1>Admin Dashboard</h1>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="admin-tab-buttons">
        <button
          className={activeTab === "products" ? "active" : ""}
          onClick={() => setActiveTab("products")}
          type="button"
        >
          Products CRUD
        </button>
        <button
          className={activeTab === "users" ? "active" : ""}
          onClick={() => setActiveTab("users")}
          type="button"
        >
          Users CRUD
        </button>
      </div>

      {fatalError && <p className="admin-error">{fatalError}</p>}

      {activeTab === "products" && (
        <section className="admin-section">
          <h2>Manage Products</h2>
          <form className="admin-form" onSubmit={handleProductSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={productForm.name}
              onChange={handleProductInput}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={productForm.price}
              onChange={handleProductInput}
              min="0"
              step="0.01"
              required
            />
            <input type="file" name="image" onChange={handleProductInput} />
            <div className="admin-form-actions">
              <button type="submit" disabled={productLoading}>
                {productLoading ? "Saving..." : productActionLabel}
              </button>
              {productForm.id && (
                <button type="button" className="secondary" onClick={resetProductForm}>
                  Cancel Edit
                </button>
              )}
            </div>
            {productMessage && <p className="admin-status">{productMessage}</p>}
          </form>

          <div className="admin-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      {product.image ? (
                        <img src={`${API_BASE_URL}/uploads/${product.image}`} alt={product.name} />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>
                      <button type="button" onClick={() => handleEditProduct(product)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        className="danger"
                        onClick={() => handleDeleteProduct(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {products.length === 0 && (
                  <tr>
                    <td colSpan="4">No products found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTab === "users" && (
        <section className="admin-section">
          <h2>Manage Users</h2>
          <form className="admin-form" onSubmit={handleUserSubmit}>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              value={userForm.name}
              onChange={handleUserInput}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="User Email"
              value={userForm.email}
              onChange={handleUserInput}
              required
            />
            <div className="admin-form-actions">
              <button type="submit" disabled={userLoading}>
                {userLoading ? "Saving..." : userActionLabel}
              </button>
              {userForm.id && (
                <button type="button" className="secondary" onClick={resetUserForm}>
                  Cancel Edit
                </button>
              )}
            </div>
            {userMessage && <p className="admin-status">{userMessage}</p>}
          </form>

          <div className="admin-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button type="button" onClick={() => handleEditUser(user)}>
                        Edit
                      </button>
                      <button type="button" className="danger" onClick={() => handleDeleteUser(user._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan="3">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
};

export default AdminDashboard;
