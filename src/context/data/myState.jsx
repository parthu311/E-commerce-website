import  { useEffect, useState } from 'react';
import MyContext from './myContext';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';

function MyState(props) {
    const [mode, setMode] = useState('light');
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
    });
    const [product, setProduct] = useState([]);
    const [order, setOrder] = useState([]);
    const [user, setUser] = useState([]);
    const [searchkey, setSearchkey] = useState('');
    const [filterType, setFilterType] = useState('');
    const [filterPrice, setFilterPrice] = useState('');

    // Toggle between light and dark mode
    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        document.body.style.backgroundColor = newMode === 'light' ? 'white' : 'rgb(17, 24, 39)';
    };

    // Add a product to Firestore
    const addProduct = async () => {
        if (!products.title || !products.price || !products.imageUrl || !products.category || !products.description) {
            return toast.error("All fields are required");
        }

        setLoading(true);

        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, products);
            toast.success("Product added successfully");
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 800);
            getProductData();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Retrieve products from Firestore
    const getProductData = async () => {
        setLoading(true);

        try {
            const q = query(collection(fireDB, 'products'), orderBy('time'));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const productArray = [];
                querySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productArray);
                setLoading(false);
            });

            return () => unsubscribe();
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    // Update product in Firestore
    const updateProduct = async () => {
        setLoading(true);

        try {
            await setDoc(doc(fireDB, 'products', products.id), products);
            toast.success("Product updated successfully");
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 800);
            getProductData();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Delete product from Firestore
    const deleteProduct = async (item) => {
        setLoading(true);

        try {
            await deleteDoc(doc(fireDB, 'products', item.id));
            toast.success('Product deleted successfully');
            getProductData();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Retrieve order data from Firestore
    const getOrderData = async () => {
        setLoading(true);

        try {
            const result = await getDocs(collection(fireDB, "order"));
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
            });
            setOrder(ordersArray);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Retrieve user data from Firestore
    const getUserData = async () => {
        setLoading(true);

        try {
            const result = await getDocs(collection(fireDB, "users"));
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
            });
            setUser(usersArray);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Fetch initial data
        getProductData();
        getOrderData();
        getUserData();
    }, []);

    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, setLoading,
            products, setProducts, addProduct, product,
            updateProduct, deleteProduct, order,
            user, searchkey, setSearchkey, filterType, setFilterType,
            filterPrice, setFilterPrice
        }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;
