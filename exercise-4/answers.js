function mapToSquare(input) {
  // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
  return input.map((num) => num ** 2);
}

function convertTemperature(input) {
  // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
  function fah_to_celsius(fah) {
    let cel = ((fah - 32) * 5) / 9;
    return Number(cel.toFixed(1));
  }
  return input.map((data) => ({
    date: data.date,
    temperature: fah_to_celsius(data.temperature),
  }));
}

function filterEvenNumber(input) {
  // TODO: filter input เอาเลขคู่เท่านั้น
  return input.filter(number => number % 2 === 0);
}

function filterAgeRange(input) {
  // TODO: กรอง input.people ตามช่วงอายุ
  const { min, max, people } = input;
  return people.filter((person) => min < person.age && person.age < max);
}

function removeByFilter(input) {
  // TODO: ลบ Object ใน Array ด้วยการ filter
  const { removeId, people } = input;
  return people.filter((person) => person.id !== removeId);
}

function replaceBySplice(input) {
  // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **เปลี่ยน (replace)** สมาชิกใน Array
  // เรียงลำดับตัวเลขให้ถูกต้อง
  input.splice(4, 1, 4)
  return input
}
