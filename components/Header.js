const Header = ({ user, removeCredentials }) => {
    return (
        <div className="flex justify-between px-3 items-center pb-5">
            <h1 className="mr-4">
                {user.name} {user.last_name}
            </h1>
            <button
                onClick={removeCredentials}
                className="text-sm text-indigo-50 transition duration-150 hover:bg-red-500 bg-red-600 font-semibold p-2 rounded-sm "
            >
                Sing Out
            </button>
        </div>
    );
};

export default Header;
