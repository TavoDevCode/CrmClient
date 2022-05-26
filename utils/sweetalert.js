// SWAl
import Swal from 'sweetalert2';

// EXPORTS

export const swalBase = (props) => {
    const { title = 'title', text = 'text', icon = 'success', confirmButtonText = 'ok' } = props;

    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText,
    });
};

export const swalToast = (props) => {
    const {
        toast = true,
        position = 'top-end',
        showConfirmButton = false,
        timer = 1000,
        timerProgressBar = true,
        icon = 'success',
        title = 'Signed in successfully',
    } = props;

    const Toast = Swal.mixin({
        toast: toast,
        position: position,
        showConfirmButton: showConfirmButton,
        timer: timer,
        timerProgressBar: timerProgressBar,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    Toast.fire({
        icon: icon,
        title: title,
    });
};

export const swalConfirm = (props, callback) => {
    const {
        title = 'Are you sure?',
        text = `You won't be able to revert this!'`,
        icon = 'warning',
        showCancelButton = true,
        confirmButtonColor = '#3085d6',
        cancelButtonColor = '#d33',
        confirmButtonText = 'Yes, delete it!',
        cancelButtonText = 'Cancel',
    } = props;

    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: showCancelButton,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: cancelButtonColor,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        }
    });
};
