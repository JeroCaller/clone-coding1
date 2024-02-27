const ul = document.querySelector('#quick-link > ul');
const buttonPrev = document.getElementById('cate-prev');
const buttonNext = document.getElementById('cate-next');
let curPos = 0;
let itemsNumToShow = 3;

/**
 * 부모 요소의 자식 노드들의 display 속성을 none으로 설정한다.
 * @param {Element} parent   자식 노드를 가지는 부모 요소.
 */
function setDisplayNoneAll(parent) {
    for (let i = 0; i < parent.children.length; i++) {
        parent.children[i].style.display = 'none';
    }
}

/**
 * 정해진 수의 자식 요소만을 화면에 표시한다.
 * @param {number} num   보여줄 아이템 수.
 * @param {number} pos   보여줄 아이템들 중 맨 앞에 위치한 아이템의 인덱스.
 * @param {Element} parent   보여줄 아이템들을 자식 요소로 하는 부모 요소.
 */
function showItems(num, pos, parent) {
    let count = 0;
    let childNum = parent.children.length;
    let i;

    setDisplayNoneAll(parent);

    if (pos >= childNum - num) {
        i = childNum - num;
    } else {
        i = pos;
    }
    for(; count < num; i++) {
        parent.children[i].style.display = 'block';
        count++;
    }
}

function showPrev() {
    if (curPos > 0) {
        curPos--;
    } else {
        curPos = 0;
    }
    showItems(itemsNumToShow, curPos, ul);
}

function showNext() {
    if (curPos < ul.children.length - itemsNumToShow) {
        curPos++;
    } else {
        curPos = ul.children.length - itemsNumToShow;
    }
    showItems(itemsNumToShow, curPos, ul);
}

showItems(itemsNumToShow, curPos, ul);
buttonPrev.addEventListener('click', showPrev);
buttonNext.addEventListener('click', showNext);