import { MDCDialog, strings } from '@material/dialog';
import {MDCChipSet} from '@material/chips';
import {MDCRipple} from '@material/ripple';

//const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
//const fabRipple = new MDC(document.querySelector('.mdc-card'));
//const chipSetEl = document.querySelector('.mdc-chip-set');
//const chipSet = new MDCChipSet(chipSetEl);
// import {MDCDataTable} from '@material/data-table';
// const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

// const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
// const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
//   return new MDCRipple(el);
// });

$('.mdc-dialog').each(function (i, elem) {
    const dialog = new MDCDialog(elem);
    dialog.listen('MDCDialog:accept', function () {
        console.log('accepted');
    });

    dialog.listen('MDCDialog:cancel', function () {
        console.log('canceled');
    });
   // console.log("-------------------------- currently testing ----------------------");
    var id = elem.id;
   // console.log(id + " : id what is that --------------------------------------");
    switch(id) {
        case "naturalnessDialogue":
            $('#naturalnessDesc').on('click', function (event) {
                event.preventDefault();
                console.log("clicked");
                dialog.lastFocusedTarget = event.target;
                dialog.open();
            });
            break;
        case "accountabilityDialogue":
            $('#accountabilityDesc').on('click', function (event) {
                event.preventDefault();
                console.log("clicked");
                dialog.lastFocusedTarget = event.target;
                dialog.open();
            });
            break;
        case "productivityDialogue":
            $('#productivityDesc').on('click', function (event) {
                event.preventDefault();
                console.log("clicked");
                dialog.lastFocusedTarget = event.target;
                dialog.open();
            });
            break;
        case "waterbearDialogue":
            $('#waterbearDesc').on('click', function (event) {
                event.preventDefault();
                console.log("clicked");
                dialog.lastFocusedTarget = event.target;
                dialog.open();
            });
            break;
        case "maxsatDialogue":
            $('#maxsatDesc').on('click', function (event) {
                event.preventDefault();
                console.log("clicked");
                dialog.lastFocusedTarget = event.target;
                dialog.open();
            });
            break;
        case "annotpdfDialogue":
            $('#annotpdfDesc').on('click', function (event) {
                event.preventDefault();
                console.log("clicked");
                dialog.lastFocusedTarget = event.target;
                dialog.open();
            });
            break;
        case "timetableDialogue":
            $('#timetableDesc').on('click', function (event) {
                event.preventDefault();
                console.log("clicked");
                dialog.lastFocusedTarget = event.target;
                dialog.open();
            });
            break;
        case "emotionDialogue":
            $('#emotionDesc').on('click', function (event) {
                event.preventDefault();
                console.log("clicked");
                dialog.lastFocusedTarget = event.target;
                dialog.open();
            });
            break;
        default:
          // code block
      }
});